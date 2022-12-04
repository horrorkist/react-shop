import styled, { css, DefaultTheme } from "styled-components";

interface IButton {
  emphasize?: boolean;
  theme?: DefaultTheme;
  children: any;
  onClick?: any;
}

interface ButtonProps {
  emphasize?: boolean;
  theme?: DefaultTheme;
}

const Wrapper = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  min-height: 50px;
  background-color: ${(props: any) =>
    props.emphasize ? props.theme.emphasize : props.theme.baseColor};
  color: ${(props) =>
    props.emphasize
      ? "white"
      : props.theme.isDark
      ? props.theme.text
      : "black"};

  border-radius: 10px;
  padding: 15px;
  border: ${(props) =>
    props.emphasize
      ? "none"
      : props.theme.isDark
      ? `1px solid ${props.theme.text}`
      : `1px solid black`};

  transition: all 0.1s ease-in-out;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.emphasize
        ? props.theme.emphasizeDark
        : props.theme.isDark
        ? props.theme.text
        : "black"};

    ${(props) =>
      !props.emphasize && props.theme.isDark
        ? css`
            color: ${(props) => props.theme.baseColor};
          `
        : css`
            color: white;
          `}
  }

  &:active {
    scale: 0.95;
    transition: none;
  }
`;

export default function Button(props: IButton) {
  return (
    <Wrapper
      onClick={props.onClick}
      onMouseDown={(e) => {
        e.preventDefault();
        e.currentTarget.classList.add("active");
      }}
      onMouseUp={(e) => {
        e.preventDefault();
        e.currentTarget.classList.remove("active");
      }}
      emphasize={props.emphasize}
    >
      {props.children}
    </Wrapper>
  );
}
