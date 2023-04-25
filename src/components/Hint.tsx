import {Popover} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";

const Hint = ({children}: {children: string}) => {
    return (
        <Popover className="cursor-help" content={children}>
            <QuestionCircleOutlined/>
        </Popover>
    )
}


export default Hint
