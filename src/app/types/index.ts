export const ParallaxEffectType = {
  HOVER: 'HOVER',
  FOLLOW: 'FOLLOW',
  HOVER_WITH_RETURN: 'HOVER_WITH_RETURN',
  FOLLOW_WITH_RETURN: 'FOLLOW_WITH_RETURN',
} as const;

export type ParallaxEffectType = keyof typeof ParallaxEffectType;
