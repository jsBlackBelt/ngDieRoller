import { Injectable } from '@angular/core';
import { range } from 'lodash';

export const PRESETS_NUM = 21;

@Injectable()
export class PresetsService {

  public getPresets(): string[] {
    return range(1, PRESETS_NUM + 1).map((item) => {
      let preset = localStorage.getItem(`preset${item}`);

      if (!preset) {
        preset = `${item}d6`;
        this.savePreset(preset, item);
      }

      return preset;
    });
  }

  public savePreset(preset: string, idx: number): void {
    localStorage.setItem(`preset${idx}`, preset);
  }

  public savePresets(presets: string[]): string[] {
    presets.map((preset, idx) => {
      this.savePreset(preset, idx + 1);
    });
    return this.getPresets();
  }

}
