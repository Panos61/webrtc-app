'use client';
import { IFormikProps } from '@/utils/useFormikHook';
import { Button, Input } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import Badge from './Badge';

import styles from './form.module.css';

const CreateRoomForm: React.FC<IFormikProps> = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Input
        name='username'
        placeholder='Enter your username'
        leftSection={<IconUser size={16} />}
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      {(!formik.touched.username && !formik.values.username) ||
      formik.errors.username ? (
        <Badge />
      ) : null}
      {/* @TODO: Display validation errors. */}
      <Button
        type='submit'
        variant='light'
        color='blue'
        fullWidth
        mt='md'
        radius='md'
      >
        Create meeting room
      </Button>
    </form>
  );
};

export default CreateRoomForm;
