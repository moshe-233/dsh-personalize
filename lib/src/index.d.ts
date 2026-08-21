declare const name = "dsh-personalize";
declare const inject: string[];
/** Empty configuration schema: this plugin owns its own JSON persistence. */
declare const Config: any;
declare function apply(ctx: any): void;
export { Config, apply, inject, name };
