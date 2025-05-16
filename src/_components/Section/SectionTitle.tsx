import { Text3D } from "@react-three/drei";

export default function SectionTitle({ children, ...props }: { children: string }) {
  return (
    <Text3D font={"fonts/Inter_Bold.json"} size={0.3} {...props}>
      {children}
      <meshStandardMaterial color="white" />
    </Text3D>
  );
};
