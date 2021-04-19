interface InterpolationOptions {
  smart_count?: number | { length: number };
  _?: string;

  [interpolationKey: string]: any;
}

export type translateFunction  = (phrase: string, options?: number | InterpolationOptions) => string
