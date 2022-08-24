// Styles:
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

type ComponentSize = 'normal' | 'h1' | 'h2' | 'h3';
type TextColor = 'primary' | 'secondary' | 'tertiary';


export const MyLabel = ({

    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor,
    backgroundColor = 'transparent'

}: MyLabelProps) => {

    return (
        <span className={`label ${size} text-${color}`} style={{
            color: fontColor,
            backgroundColor
        }}>
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}

export default MyLabel;