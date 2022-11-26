import i18n from "@/i18n/i18n";

export enum NotifTypeEnum {
  SMS,
  EMAIL,
  LETTER
}

export function getI18nValueForNotifType(notifType: NotifTypeEnum): string {
  switch (notifType) {
    case NotifTypeEnum.SMS:
      return `${i18n.fr.NotifType.SMS}`
    case NotifTypeEnum.EMAIL:
      return `${i18n.fr.NotifType.EMAIL}`
    case NotifTypeEnum.LETTER:
      return `${i18n.fr.NotifType.LETTER}`

    default:
      return '';
  }
}