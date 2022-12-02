interface IIconTriangleProps {
  rotate: string;
}
export default function IconTriangle({ rotate }: IIconTriangleProps) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="13px"
      height="13px"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      fill="#8e8e8f"
      transform={`rotate(${rotate})`}
    >
      <g></g>
      <polygon points="64,96 448,96 256,416 " />
    </svg>
  );
}
