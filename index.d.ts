declare module 'react-native-slide-to-unlock' {
  import { ReactNode } from 'react'
  interface ButtonProps {
    childrenContainer?: any,
    onEndReached: () => void,
    containerStyle?: any,
    sliderElement?: ReactNode,
    disableSliding?: boolean,
    onDraging?: (value: number) => void,
    onDragStart?: () => void
  }

  export default class SliderButton extends React.Component<ButtonProps, any> { }
}
