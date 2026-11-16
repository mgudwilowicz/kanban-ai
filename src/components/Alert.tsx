import { Callout } from "@radix-ui/themes"
import {
    ExclamationTriangleIcon,
    InfoCircledIcon,
    CheckCircledIcon
} from "@radix-ui/react-icons"

const tones = {
    error: { color: "red", Icon: ExclamationTriangleIcon },
    info: { color: "blue", Icon: InfoCircledIcon },
    success: { color: "green", Icon: CheckCircledIcon }
} as const


type AlertProps = {
    message: string | null
    tone?: "error" | "info" | "success"
}


export default function Alert({ message, tone = "error" }: AlertProps) {
    if (!message) return null

    const { color, Icon } = tones[tone]

    return (
        <Callout.Root
            color={color}
            variant="outline"
            size="1"
            role={tone === "error" ? "alert" : "status"}
        >
            <Callout.Icon>
                <Icon />
            </Callout.Icon>
            <Callout.Text>{message}</Callout.Text>

        </Callout.Root>
    )

}