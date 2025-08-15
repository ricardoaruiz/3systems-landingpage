import Link from 'next/link';
import type { NavLinkProps } from './nav-link.types';

export function NavLinkView(props: NavLinkProps) {
  return (
    <Link
      className="cursor-pointer font-semibold text-primary-cristallo text-xl transition-all hover:text-secondary-cristallo"
      {...props}
    />
  );
}
