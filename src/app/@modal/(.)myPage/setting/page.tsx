'use client';

import ModalForm from '@/components/Modal/ModalForm';
import UserSetting from '@/components/UserSetting';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();

  if (!pathname.includes('setting')) {
    return null;
  }

  return (
    <ModalForm>
      <UserSetting />
    </ModalForm>
  );
}
