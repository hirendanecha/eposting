import { checkboxAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

// default base style from the Checkbox theme
const baseStyle = definePartsStyle({
 
  control: {
    padding: 3,
    borderRadius: 0,
    background:"#DBDADE"
  }
})

// Defining a custom variant
const variantCircular = definePartsStyle({
  control: defineStyle({
    rounded: "full"
  })
})

const variants = {
  circular: variantCircular,
}


export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
})