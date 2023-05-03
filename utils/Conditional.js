
export const Conditional = ({showWhen, children}) => {
    if(showWhen) return <>{children}</>;
    return <></>;
}
