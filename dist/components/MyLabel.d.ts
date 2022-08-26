/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Is the text that appers in the component
    */
    label: string;
    /**
    * Is the text size that my component show
    */
    size: ComponentSize;
    /**
    * This property capitalizes the text
    */
    allCaps?: boolean;
    /**
    * This property changes the color of the text
    */
    color?: TextColor;
    /**
    * This property give the control to the client to change the color of the font
    */
    fontColor?: string;
    /**
    * This property give the control to the client to change the color of the font
    */
    backgroundColor?: string;
}
declare type ComponentSize = 'normal' | 'h1' | 'h2' | 'h3';
declare type TextColor = 'primary' | 'secondary' | 'tertiary';
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
