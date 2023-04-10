import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        flexDirection: "row" ,
        justifyContent:'center',
        color: "rgb(70, 156, 5)",
        verticalAlign: "middle"
    }, 
    view: {
        width: "80%"
    }, 
    title_center: {
        alignItems: "center"
    },
    title_on: {
        color: "rgb(94,94,94)",
    },
    title_energy: {
        color: "rgb(209,61,35)" 
    },
    remeber_cbx: {
        textAlign: "right",
        color: "rgb(70, 156, 5)"
    },
    login: {
        backgroundColor: "rgb(70, 156, 5)"
    },forget_pwd: {
        color: "rgb(70, 156, 5)"
    }, 
    checkboxContainer: {
        marginTop: 15,
        flexDirection: 'row'
        
    },
    remember_cbx: {
        alignSelf: 'center'
    },
    remember_lbl: {
        marginTop: 10,
        color: "rgb(70, 156, 5)",
        fontWeight: "bold"
    },
});