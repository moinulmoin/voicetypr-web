import type { ComponentType } from 'react';
import { DictationVsTypingTool } from './dictation-vs-typing-tool';
import { PromptLengthCounter } from './prompt-length-counter';
import { TypingLoadCalculator } from './typing-load-calculator';
import { TypingSpeedTest } from './typing-speed-test';

export const toolComponents: Record<string, ComponentType> = {
  'dictation-vs-typing': DictationVsTypingTool,
  'prompt-length-counter': PromptLengthCounter,
  'typing-load-calculator': TypingLoadCalculator,
  'typing-speed-test': TypingSpeedTest,
};
