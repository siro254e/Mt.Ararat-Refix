interface SchoolLogoProps {
  className?: string;
  alt?: string;
  /**
   * `mark` is the wreath-and-shield emblem used in compact spaces (navbar,
   * footer, favicon). `full` is the complete school lockup used in the hero.
   */
  variant?: 'mark' | 'full';
}

/**
 * Official school logo. Replace `logo-mark.png` or `logo-full.jpg` in /public
 * to update every placement at once.
 */
export function SchoolLogo({
  className = 'h-10 w-10',
  alt = 'Mt. Ararat Shinners School logo',
  variant = 'mark'
}: SchoolLogoProps) {
  const isFull = variant === 'full';

  return (
    <img
      src={isFull ? '/logo-full.jpg' : '/logo-mark.png'}
      alt={alt}
      width={isFull ? 480 : 192}
      height={isFull ? 470 : 192}
      className={`object-contain ${className}`}
      decoding="async"
    />
  );
}
