import { join } from 'path';
import { utils } from 'umi';
import { fireEvent, getByText, cleanup, waitFor } from '@alita/test';
import { generateTmp, render } from '@umijs/test-utils';

afterEach(cleanup);

test('normal', async () => {
  const cwd = process.cwd();
  await generateTmp({ cwd });
  const { getByText } = render({ cwd: `${cwd}/src` });
  await waitFor(() => {
    expect(getByText('英雄')).toHaveAttribute('href', '/hero');
  })
});