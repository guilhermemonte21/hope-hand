import { GroupView } from "./Style";
export const Group = ({
  children,
  row = false,
  radius,
  bgColor = "transparent",
  flexWrap,
  maxWidth = "100%",
  padding,
  alignItems = "center",
  justifyContent = "center",
  gap = 10,
}) => {
  return (
    <GroupView
      style={{
        padding: padding,
        borderRadius: radius,
        backgroundColor: bgColor,
        flexWrap: flexWrap ? "wrap" : "nowrap",
        maxWidth: maxWidth,
        flexDirection: row ? "row" : "column",
        alignItems: alignItems,
        justifyContent: justifyContent,
        gap: gap,
      }}
    >
      {children}
    </GroupView>
  );
};
