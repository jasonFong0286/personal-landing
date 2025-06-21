// FontLoader.d.ts
declare module 'three/examples/jsm/loaders/FontLoader' {
  import { Loader } from 'three';
  import { Font } from 'three/examples/jsm/loaders/FontLoader';

  export class FontLoader extends Loader {
    load(
      url: string,
      onLoad: (font: Font) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }

  export interface FontData {
    // optional if you want to type custom font JSON
  }

  export class Font {
    constructor(data: FontData);
    data: FontData;
    generateShapes(text: string, size: number): any[];
  }
}


// TextGeometry.d.ts
declare module 'three/examples/jsm/geometries/TextGeometry' {
  import { ExtrudeGeometry, BufferGeometryParameters } from 'three';
  import { Font } from 'three/examples/jsm/loaders/FontLoader';

  export interface TextGeometryParameters extends BufferGeometryParameters {
    font: Font;
    size?: number;
    height?: number;
    curveSegments?: number;
    bevelEnabled?: boolean;
    bevelThickness?: number;
    bevelSize?: number;
    bevelOffset?: number;
    bevelSegments?: number;
  }

  export class TextGeometry extends ExtrudeGeometry {
    constructor(text: string, parameters: TextGeometryParameters);
  }
}