import { VNode } from "../../../../ts-common/dom";
import { ShapesCollection } from "../../..";
import { ITextShapeConfig, IBaseShape } from "../../..";
import { BaseShape } from "./BaseShape";
export declare class TextShape extends BaseShape implements IBaseShape {
  config: ITextShapeConfig;
  data: ShapesCollection;
  private _prevValue;
  constructor(config: ITextShapeConfig, parameters?: any);
  render(): VNode;
  protected setDefaults(
    config: ITextShapeConfig,
    defaults: ITextShapeConfig
  ): ITextShapeConfig;
  protected getContent(): VNode;
}
