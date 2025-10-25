import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AccessibilitySettings {
  contrast: boolean;
  highlightLinks: boolean;
  textSize: 'small' | 'medium' | 'large';
  textSpacing: number;
  pauseAnimations: boolean;
  hideImages: boolean;
  dyslexiaFont: boolean;
  biggerCursor: boolean;
  tooltips: boolean;
  lineHeight: number;
  textAlignment: 'left' | 'center' | 'justify';
  lowSaturation: boolean;
}

const defaultSettings: AccessibilitySettings = {
  contrast: false,
  highlightLinks: false,
  textSize: 'medium',
  textSpacing: 0,
  pauseAnimations: false,
  hideImages: false,
  dyslexiaFont: false,
  biggerCursor: false,
  tooltips: false,
  lineHeight: 0,
  textAlignment: 'left',
  lowSaturation: false,
};

const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'left' | 'right'>('right');
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const widgetRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Apply accessibility settings to document
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    // Create or update accessibility styles
    let styleElement = document.getElementById('accessibility-styles') as HTMLStyleElement;
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'accessibility-styles';
      document.head.appendChild(styleElement);
    }

    let css = '';

    // High contrast mode
    if (settings.contrast) {
      css += `
        body, html {
          background: #000000 !important;
          color: #ffffff !important;
        }
        * {
          background-color: #000000 !important;
          color: #ffffff !important;
          border-color: #ffffff !important;
        }
        img, video, svg {
          filter: contrast(150%) brightness(1.2) !important;
        }
      `;
    }

    // Highlight links
    if (settings.highlightLinks) {
      css += `
        a, button, [role="button"], [tabindex]:not([tabindex="-1"]) {
          outline: 3px solid #ffff00 !important;
          outline-offset: 2px !important;
          border-radius: 4px !important;
          background: rgba(255, 255, 0, 0.1) !important;
        }
      `;
    }

    // Text size
    if (settings.textSize === 'small') {
      html.style.fontSize = '14px';
    } else if (settings.textSize === 'medium') {
      html.style.fontSize = '16px';
    } else if (settings.textSize === 'large') {
      html.style.fontSize = '20px';
    }

    // Text spacing
    if (settings.textSpacing !== 0) {
      css += `
        * {
          letter-spacing: ${settings.textSpacing * 0.05}em !important;
          word-spacing: ${settings.textSpacing * 0.1}em !important;
        }
      `;
    }

    // Pause animations
    if (settings.pauseAnimations) {
      css += `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
    }

    // Hide images
    if (settings.hideImages) {
      css += `
        img, picture, video, iframe, embed, object, svg {
          opacity: 0 !important;
          pointer-events: none !important;
        }
        img::after, picture::after {
          content: "🖼️ Image hidden for accessibility" !important;
          display: block !important;
          opacity: 1 !important;
          background: hsl(var(--muted)) !important;
          padding: 1rem !important;
          text-align: center !important;
          border: 2px dashed hsl(var(--border)) !important;
        }
      `;
    }

    // Dyslexia friendly font
    if (settings.dyslexiaFont) {
      css += `
        * {
          font-family: 'Comic Sans MS', 'Arial', sans-serif !important;
        }
      `;
    }

    // Bigger cursor
    if (settings.biggerCursor) {
      css += `
        * {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M2 2v28l8-8h8l-4-4h8l-8-8v-8z' fill='black'/%3E%3C/svg%3E") 16 16, auto !important;
        }
        a, button, [role="button"] {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M10 2l6 6-2 2-6-6-2-2zM2 10l6 6-2 2-6-6-2-2z' fill='blue'/%3E%3C/svg%3E") 16 16, pointer !important;
        }
      `;
    }

    // Tooltips - enhanced focus indicators
    if (settings.tooltips) {
      css += `
        [title]:hover::after, [aria-label]:hover::after, [data-tooltip]:hover::after {
          content: attr(title) attr(aria-label) attr(data-tooltip);
          position: absolute;
          background: hsl(var(--popover));
          color: hsl(var(--popover-foreground));
          padding: 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          z-index: 9999;
          border: 1px solid hsl(var(--border));
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
      `;
    }

    // Line height
    if (settings.lineHeight !== 0) {
      css += `
        p, div, span, a, li, td, th {
          line-height: ${1.5 + settings.lineHeight * 0.2} !important;
        }
      `;
    }

    // Text alignment
    if (settings.textAlignment !== 'left') {
      css += `
        p, div, span, h1, h2, h3, h4, h5, h6 {
          text-align: ${settings.textAlignment} !important;
        }
      `;
    }

    // Low saturation
    if (settings.lowSaturation) {
      css += `
        * {
          filter: saturate(0.3) !important;
        }
      `;
    }

    styleElement.textContent = css;
  }, [settings]);

  // Keyboard shortcut (Ctrl+U)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        setIsOpen(prev => !prev);
        if (!isOpen) {
          setTimeout(() => buttonRef.current?.focus(), 100);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleWidget = () => setIsOpen(!isOpen);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetAllSettings = () => {
    setSettings(defaultSettings);
  };

  const moveWidget = () => {
    setPosition(prev => prev === 'left' ? 'right' : 'left');
  };

  const hideWidget = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <Button
        ref={buttonRef}
        onClick={toggleWidget}
        className={`fixed ${position === 'right' ? 'right-4' : 'left-4'} bottom-4 z-50 w-14 h-14 rounded-full shadow-elegant bg-primary hover:bg-primary/90 text-primary-foreground p-0 transition-all duration-300`}
        aria-label="Open accessibility menu (Ctrl+U)"
        title="Accessibility Menu (Ctrl+U)"
      >
        <span className="text-2xl">♿</span>
      </Button>

      {/* Accessibility Widget Panel */}
      {isOpen && (
        <Card
          ref={widgetRef}
          className={`fixed ${position === 'right' ? 'right-4' : 'left-4'} bottom-20 z-50 w-80 max-w-[calc(100vw-2rem)] h-[70vh] bg-background/95 backdrop-blur-sm border shadow-elegant flex flex-col`}
          role="dialog"
          aria-label="Accessibility Settings"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
            <h2 className="text-lg font-semibold text-primary">Accessibility Settings</h2>
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={moveWidget}
                aria-label={`Move widget to ${position === 'right' ? 'left' : 'right'}`}
                className="h-8 w-8 p-0"
              >
                {position === 'right' ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={hideWidget}
                aria-label="Close accessibility menu"
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Scrollable Content */}
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-4">
              {/* Visual Adjustments */}
              <div>
                <h3 className="font-medium mb-3 text-accent">Visual Adjustments</h3>
                
                {/* High Contrast Toggle */}
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">High Contrast</label>
                  <Button
                    size="sm"
                    variant={settings.contrast ? "default" : "outline"}
                    onClick={() => updateSetting('contrast', !settings.contrast)}
                    className="h-7 px-3"
                  >
                    {settings.contrast ? 'ON' : 'OFF'}
                  </Button>
                </div>

                {/* Text Size */}
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Text Size</label>
                  <div className="flex gap-1">
                    {(['small', 'medium', 'large'] as const).map((size) => (
                      <Button
                        key={size}
                        size="sm"
                        variant={settings.textSize === size ? "default" : "outline"}
                        onClick={() => updateSetting('textSize', size)}
                        className="h-7 px-2 text-xs"
                      >
                        {size.charAt(0).toUpperCase() + size.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Text Spacing */}
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Text Spacing</label>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateSetting('textSpacing', Math.max(0, settings.textSpacing - 1))}
                      className="h-7 w-7 p-0"
                    >
                      -
                    </Button>
                    <span className="min-w-[2rem] text-center text-sm">{settings.textSpacing}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateSetting('textSpacing', Math.min(5, settings.textSpacing + 1))}
                      className="h-7 w-7 p-0"
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Line Height */}
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium">Line Height</label>
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateSetting('lineHeight', Math.max(0, settings.lineHeight - 1))}
                      className="h-7 w-7 p-0"
                    >
                      -
                    </Button>
                    <span className="min-w-[2rem] text-center text-sm">{settings.lineHeight}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateSetting('lineHeight', Math.min(3, settings.lineHeight + 1))}
                      className="h-7 w-7 p-0"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Text Alignment */}
              <div>
                <h3 className="font-medium mb-3 text-accent">Text Alignment</h3>
                <div className="grid grid-cols-3 gap-2">
                  {(['left', 'center', 'justify'] as const).map((align) => (
                    <Button
                      key={align}
                      size="sm"
                      variant={settings.textAlignment === align ? "default" : "outline"}
                      onClick={() => updateSetting('textAlignment', align)}
                      className="text-xs"
                    >
                      {align.charAt(0).toUpperCase() + align.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Toggle Options */}
              <div>
                <h3 className="font-medium mb-3 text-accent">Display Options</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'highlightLinks', label: 'Highlight Links' },
                    { key: 'pauseAnimations', label: 'Pause Animations' },
                    { key: 'hideImages', label: 'Hide Images' },
                    { key: 'dyslexiaFont', label: 'Dyslexia Font' },
                    { key: 'biggerCursor', label: 'Bigger Cursor' },
                    { key: 'tooltips', label: 'Enhanced Tooltips' },
                    { key: 'lowSaturation', label: 'Low Saturation' },
                  ].map(({ key, label }) => (
                    <Button
                      key={key}
                      size="sm"
                      variant={settings[key as keyof AccessibilitySettings] ? "default" : "outline"}
                      onClick={() => updateSetting(key as keyof AccessibilitySettings, !settings[key as keyof AccessibilitySettings])}
                      className="text-xs h-8 justify-start"
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Reset Button */}
              <Button
                onClick={resetAllSettings}
                variant="destructive"
                className="w-full"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset All Settings
              </Button>
            </div>
          </ScrollArea>
        </Card>
      )}
    </>
  );
};

export default AccessibilityWidget;