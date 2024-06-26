// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker } from 'antd';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import dayjs, { Dayjs } from 'dayjs';

type DateRangeType = [start: Dayjs | null, end: Dayjs | null];

const { RangePicker } = DatePicker;
dayjs.extend(isSameOrBefore);

export const timeDefault = dayjs('00:00', 'HH:mm');
export { dayjs, RangePicker };
export type { DateRangeType };
