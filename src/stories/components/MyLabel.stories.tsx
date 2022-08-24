import { ComponentMeta, ComponentStory } from '@storybook/react';

// Component:
import MyLabel from "../../components/MyLabel";


export default {

    title: 'UI/MyLabel', // Menu path
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' }
    }

} as ComponentMeta<typeof MyLabel> // Esta interfaz es una descripción del objeto


const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />


export const Basic = Template.bind({}) // Rompes la referencia al objeto padre Template, el metodo Bind es una forma de crear un copia del objeto padre viene implicito en javascript.
Basic.args = {
    size: 'normal',// Etos son los valores por defecto
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true // Capitaliza el texto del span
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5e0adb'
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: 'white',
    backgroundColor: '#5e0adb'
}