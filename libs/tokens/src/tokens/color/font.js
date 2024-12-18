module.exports = {
  color: {
    font: {
      base: { value: '{color.base.grey.900.value}' },
      secondary: { value: '{color.base.grey.800.value}' },
      tertiary: { value: '{color.base.grey.600.value}' },
      quaternary: { value: '{color.base.grey.400.value}' },
      link: { value: '{color.brand.primary.base.value}' },
      active: { value: '{color.brand.secondary.base.value}' },
      error: { value: '{color.base.red.600.value}' },
      warning: { value: '{color.base.orange.800.value}' },
      success: { value: '{color.base.green.600.value}' },
      disabled: { value: '{color.font.secondary.value}' },

      inverse: {
        base: { value: '{color.base.white.value}' },
        secondary: { value: '{color.base.grey.100.value}' },
        tertiary: { value: '{color.base.grey.200.value}' },
        quaternary: { value: '{color.base.grey.400.value}' },
        link: { value: '{color.brand.primary.light.value}' },
        active: { value: '{color.brand.secondary.light.value}' },
        error: { value: '{color.base.red.400.value}' },
        warning: { value: '{color.base.orange.400.value}' },
        success: { value: '{color.base.green.400.value}' },
        disabled: { value: '{color.font.inverse.secondary.value}' },
      },

      button: {
        primary: { value: '{color.font.inverse.base.value}' },
        secondary: { value: '{color.font.link.value}' },
      },
    },
  },
};
