import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// UI Kit theme colors
				'ui-primary': 'var(--ui-primary)',
				'ui-secondary': 'var(--ui-secondary)',
				'ui-accent': 'var(--ui-accent)',
				'ui-background': 'var(--ui-background)',
				'ui-surface': 'var(--ui-surface)',
				'ui-surface-elevated': 'var(--ui-surface-elevated)',
				'ui-text-primary': 'var(--ui-text-primary)',
				'ui-text-secondary': 'var(--ui-text-secondary)',
				'ui-text-muted': 'var(--ui-text-muted)',
				'ui-border': 'var(--ui-border)',
				'ui-success': 'var(--ui-success)',
				'ui-warning': 'var(--ui-warning)',
				'ui-error': 'var(--ui-error)',
				'ui-info': 'var(--ui-info)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'ui': 'var(--ui-radius)',
				'ui-sm': 'var(--ui-radius-sm)',
				'ui-lg': 'var(--ui-radius-lg)',
				'ui-xl': 'var(--ui-radius-xl)'
			},
			spacing: {
				'ui-xs': 'var(--ui-spacing-xs)',
				'ui-sm': 'var(--ui-spacing-sm)',
				'ui': 'var(--ui-spacing)',
				'ui-lg': 'var(--ui-spacing-lg)',
				'ui-xl': 'var(--ui-spacing-xl)',
				'ui-2xl': 'var(--ui-spacing-2xl)'
			},
			fontSize: {
				'ui-xs': 'var(--ui-font-size-xs)',
				'ui-sm': 'var(--ui-font-size-sm)',
				'ui': 'var(--ui-font-size)',
				'ui-lg': 'var(--ui-font-size-lg)',
				'ui-xl': 'var(--ui-font-size-xl)',
				'ui-2xl': 'var(--ui-font-size-2xl)',
				'ui-3xl': 'var(--ui-font-size-3xl)',
				'ui-4xl': 'var(--ui-font-size-4xl)'
			},
			fontFamily: {
				'ui': 'var(--ui-font-family)',
				'ui-mono': 'var(--ui-font-family-mono)'
			},
			transitionDuration: {
				'ui-fast': 'var(--ui-transition-fast)',
				'ui': 'var(--ui-transition)',
				'ui-slow': 'var(--ui-transition-slow)'
			},
			boxShadow: {
				'ui-sm': 'var(--ui-shadow-sm)',
				'ui': 'var(--ui-shadow)',
				'ui-lg': 'var(--ui-shadow-lg)',
				'ui-xl': 'var(--ui-shadow-xl)'
			},
			backgroundImage: {
				'ui-gradient-primary': 'var(--ui-gradient-primary)',
				'ui-gradient-accent': 'var(--ui-gradient-accent)',
				'ui-gradient-surface': 'var(--ui-gradient-surface)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;