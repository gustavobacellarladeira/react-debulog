// colorLogs.tsx

export interface StylesPropsDebulog {
  color?: string;
  border?: string;
  padding?: string;
  margin?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  textDecoration?: string;
  backgroundColor?: string;
  [key: string]: string | undefined;
}

export interface ILogCustom {
  text: string;
  style?: StylesPropsDebulog;
}

const transformStyleHandler = (style: StylesPropsDebulog) => {
  return Object.entries(style).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key.replace(/([A-Z])/g, '-$1').toLowerCase()]: value,
    };
  }, {});
};

const transformStyleForConsole = (style: StylesPropsDebulog) => {
  style = transformStyleHandler(style);
  return Object.entries(style).reduce((acc, [key, value]) => {
    return acc + `${key}: ${value};`;
  }, '');
};

// Function to display logs with custom styles
const logWithStyle = ({
  text,
  style,
  complement,
  ...rest
}: {
  text: string;
  style?: StylesPropsDebulog;
  complement?: string | unknown;
  [key: string]: unknown;
}) => {
  return console.log(
    `%c${text}${complement}`,
    style && transformStyleForConsole(style),
    ...Object.values(rest)
  );
};

export const logCustom = (
  firstParam: ILogCustom | string,
  secondParam?: string | unknown,
  ...rest: unknown[]
) => {
  if (typeof firstParam === 'object') {
    const { text, style } = firstParam;
    return logWithStyle({
      text,
      style,
      complement: secondParam || '',
      ...rest,
    });
  }

  return logWithStyle({
    text: firstParam,
    complement: secondParam || '',
    ...rest,
  });
};

export const logSuccess = (
  firstParam: string | ILogCustom,
  secondParam?: string | unknown,
  ...rest: unknown[]
) => {
  if (typeof firstParam === 'string') {
    return logWithStyle({
      text: firstParam,
      style: {
        color: 'green',
        fontWeight: 'bold',
      },
      complement: secondParam || '',
      ...rest,
    });
  }

  return logWithStyle({
    text: firstParam.text,
    style: {
      color: 'green',
      fontWeight: 'bold',
      ...firstParam.style,
    },
    complement: secondParam || '',
    ...rest,
  });
};

export const logWarning = (
  firstParam: string | ILogCustom,
  secondParam?: string | unknown,
  ...rest: unknown[]
) => {
  if (typeof firstParam === 'string') {
    return logWithStyle({
      text: firstParam,
      style: {
        color: 'yellow',
        fontWeight: 'bold',
      },
      complement: secondParam || '',
      ...rest,
    });
  }

  return logWithStyle({
    text: firstParam.text,
    style: {
      color: 'yellow',
      fontWeight: 'bold',
      ...firstParam.style,
    },
    complement: secondParam || '',
    ...rest,
  });
};

export const logError = (
  firstParam: string | ILogCustom,
  secondParam?: string | unknown,
  ...rest: unknown[]
) => {
  if (typeof firstParam === 'string') {
    return logWithStyle({
      text: firstParam,
      style: {
        color: 'red',
        fontWeight: 'bold',
      },
      complement: secondParam || '',
      ...rest,
    });
  }

  return logWithStyle({
    text: firstParam.text,
    style: {
      color: 'red',
      fontWeight: 'bold',
      ...firstParam.style,
    },
    complement: secondParam || '',
    ...rest,
  });
};

export const logInfo = (
  firstParam: string | ILogCustom,
  secondParam?: string | unknown,
  ...rest: unknown[]
) => {
  if (typeof firstParam === 'string') {
    return logWithStyle({
      text: firstParam,
      style: {
        color: 'blue',
        fontWeight: 'bold',
      },
      complement: secondParam || '',
      ...rest,
    });
  }

  return logWithStyle({
    text: firstParam.text,
    style: {
      color: 'blue',
      fontWeight: 'bold',
      ...firstParam.style,
    },
    complement: secondParam || '',
    ...rest,
  });
};
