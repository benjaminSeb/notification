import styled from '@emotion/styled';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { NotifTypeEnum } from '../../app/utils/notifTypeEnum';

const SimpleNotif = styled(ToggleButton)`
    color: green;
`

const MediumNotif = styled(ToggleButton)`
    color: blue;
`

const ComplexNotif = styled(ToggleButton)`
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
            <SimpleNotif value={NotifTypeEnum.SIMPLE} size='large' >Notification {NotifTypeEnum.SIMPLE}</SimpleNotif>
            <MediumNotif value={NotifTypeEnum.MIDDLE} size='large' >Notification {NotifTypeEnum.MIDDLE}</MediumNotif>
            <ComplexNotif value={NotifTypeEnum.COMPLEX} size='large' >Notification {NotifTypeEnum.COMPLEX}</ComplexNotif>
        </ToggleButtonGroup>
    )
}