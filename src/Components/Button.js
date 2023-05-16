import { Button } from "native-base";
import React from "react";

function Buttone({ mt, bg, color, children, onPress, fontSize }) {
    return (
        <Button w={"full"} h={55} mt={mt} rounded={"full"} bg={bg} _text={{ color: color, fontWeight: 'bold', display: "flex", justifyContent: "center", alignItems: "center", fontSize: fontSize }}
            _pressed={{ bg: bg }}
            onPress={onPress}
        >
            {children}
        </Button>
    )
}

export default Buttone;