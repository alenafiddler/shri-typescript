import { color } from './colors';
import { markdown } from './md';
type OptionsType ={
  bold?: boolean,
  italic?: boolean,
  mono?: boolean,
  link?: string,
  font?: Colors,
  effects?: Effects[] | [],
  background?: Colors
}

type Effects = 'bright' | 'dim' | 'italic' | 'underscore' | 'blink'
type Colors = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white'
export function style(text:string, options: OptionsType): string {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
