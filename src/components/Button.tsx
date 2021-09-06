interface ButtonProps {
  color?: 'green' | 'blue' | 'gray';
  className?: string;
  children: any;
}

export function Button(props: ButtonProps) {

  const color = props.color ?? 'gray';

  return (
    <button className={`
      bg-gradient-to-r from-${color}-400 to-${color}-700
      text-white px-4 py-2 rounded-md
      hover:bg-gradient-to-r hover:from-${color}-700 hover:to-${color}-400
      ${props.className}
    `}>
      {props.children}
    </button>
  )
}