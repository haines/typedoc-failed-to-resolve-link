import { Options as BaseOptions } from "@ahaines/a";

/**
 * More optional things.
 */
export interface Options extends Pick<BaseOptions, "boom"> {
  /**
   * Bar.
   */
  bar?: number;
}
