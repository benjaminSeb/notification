import { getI18nValueForNotifType, NotifTypeEnum } from '@/app/utils/NotifTypeEnum';
import styled from '@emotion/styled';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

const SmsNotif = styled(ToggleButton)`
    color: green;
`

const EmailNotif = styled(ToggleButton)`
    color: blue;
`

const LetterNotif = styled(ToggleButton)`
    color: red;
`

export interface ChooseNotifTypeProps {
    notifType: NotifTypeEnum;
    setNotifType: React.Dispatch<React.SetStateAction<NotifTypeEnum>>;
}

export default function ChooseNotifType({ notifType, setNotifType }: ChooseNotifTypeProps) {

    const handleNotifType = (_event: React.MouseEvent<HTMLElement, MouseEvent>, newType: NotifTypeEnum) => {
        setNotifType(newType)
    }

    return (
        <ToggleButtonGroup
            value={notifType}
            exclusive
            onChange={handleNotifType}
            aria-label="text alignment"
        >
            <SmsNotif value={NotifTypeEnum.SMS} size='large' >Notification {getI18nValueForNotifType(NotifTypeEnum.SMS)}</SmsNotif>
            <EmailNotif value={NotifTypeEnum.EMAIL} size='large' >Notification {getI18nValueForNotifType(NotifTypeEnum.EMAIL)}</EmailNotif>
            <LetterNotif value={NotifTypeEnum.LETTER} size='large' >Notification {getI18nValueForNotifType(NotifTypeEnum.LETTER)}</LetterNotif>
        </ToggleButtonGroup>
    )
}