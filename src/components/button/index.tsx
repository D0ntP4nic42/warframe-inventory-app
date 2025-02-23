import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import { styles } from "./Styles"

type Props  = TouchableOpacityProps & {
    title: string
}

export default function button({title, ...rest}: Props) {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button} {...rest}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}