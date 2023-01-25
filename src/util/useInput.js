//이 곳에 input custom hook을 만들어 보세요.
//return 해야 하는 값은 배열 형태의 값이어야 합니다.

import { useState } from "react";

function useInput() {
    const [value, setValue] = useState("");
    const bind = {
        value,
        onChange: (e) => setValue(e.target.value)
    };

    const reset = () => {
        setValue("");
    }

    return [value, bind, reset];
}

export default useInput;
