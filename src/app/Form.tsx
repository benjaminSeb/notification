import i18n from '@/i18n/i18n';
import styled from '@emotion/styled';
import {
    Field, Form, Formik
} from 'formik';
import { NotifTriggerEnum } from './utils/NotifTriggerEnum';
import { getI18nValueForNotifType, NotifTypeEnum } from './utils/NotifTypeEnum';

const FormTitle = styled('h1')({
    color: 'grey'
})

const Label = styled('label')({
    color: 'black'
})

const SubmitButton = styled('button')({
    color: 'black'
})

interface MyFormProps {
    notifType: NotifTypeEnum
}

interface MyFormValues {
    name: string;
    trigger: NotifTriggerEnum;
    dest: string[];
}

export default function MyForm({ notifType }: MyFormProps) {
    const initialValues: MyFormValues = { name: '', trigger: NotifTriggerEnum.START_EVENT, dest: [] };
    return (
        <>
            <FormTitle>{i18n.fr.Form.title} {getI18nValueForNotifType(notifType)}</FormTitle>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Form>
                    <Label htmlFor="name">{i18n.fr.Form.name}</Label>
                    <Field id="name" name="name" placeholder={i18n.fr.Form.name} />
                    <Label htmlFor="dest">{i18n.fr.Form.dest}</Label>
                    <Field id="dest" name="dest" placeholder={i18n.fr.Form.dest} />
                    <SubmitButton type="submit">{i18n.fr.Form.submit}</SubmitButton>
                </Form>
            </Formik>
        </>
    );
};