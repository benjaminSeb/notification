import i18n from '@/i18n/i18n';
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
            <SimpleNotif value={NotifTypeEnum.SMS} size='large' >Notification {i18n.fr.NotifType.SMS}</SimpleNotif>
            <MediumNotif value={NotifTypeEnum.EMAIL} size='large' >Notification {i18n.fr.NotifType.EMAIL}</MediumNotif>
            <ComplexNotif value={NotifTypeEnum.LETTER} size='large' >Notification {i18n.fr.NotifType.LETTER}</ComplexNotif>
        </ToggleButtonGroup>
    )
}