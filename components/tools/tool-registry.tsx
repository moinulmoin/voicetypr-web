import type { ComponentType } from 'react';
import { DictationVsTypingTool } from './dictation-vs-typing-tool';
import { TypingLoadCalculator } from './typing-load-calculator';
import { TypingSpeedTest } from './typing-speed-test';

export const toolComponents: Record<string, ComponentType> = {
  'dictation-vs-typing': DictationVsTypingTool,
  'typing-load-calculator': TypingLoadCalculator,
  'typing-speed-test': TypingSpeedTest,
};
