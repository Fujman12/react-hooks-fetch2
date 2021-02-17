import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const StyledButton = styled(Button).attrs(props => ({
  variant: 'contained',
  size: 'large'
}))`
  && {
    text-transform: lowercase;
    font-weight: bold;
    background-color: yellow;
    color: ${props => props.clr};
    z-index: 0;
    flex: ${props => props.flex};
    margin-right: 5px;
    &:last-child{
      margin-right: 0;
    }
    &:hover {
      background-color: yellow;
    }
  }
`
