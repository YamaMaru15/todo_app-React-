export const ColorfulMessage = (props) => {
    // 分割代入
    const { color, children } = props;
    const contentStyleB = {
        // プロパティ名が変わらない場合は省略可能
        color,
        fontSize: "18px"
    };
    return (
        // プロパティ名が変わらない場合は省略可能
        <p style={contentStyleB}>{children}</p>
    );
};

//     // プロップスを分割代入で受け取る
// export const ColorfulMessage = ({ color, children }) => {

//     const contentStyleB = {
//         // プロパティ名が変わらない場合は省略可能
//         color,
//         fontSize: "18px"
//     };
//     return (
//         // プロパティ名が変わらない場合は省略可能
//         <p style={contentStyleB}>{children}</p>
//     );
// };