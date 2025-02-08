declare namespace JSX {
    interface IntrinsicElements {
      'box-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name?: string;
        animation?: string;
        flip?: string;
        color?: string;
        size?: string;
      };
    }
  }