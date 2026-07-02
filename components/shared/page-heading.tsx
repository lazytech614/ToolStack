"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageHeadingProps {
  title: string;
  description?: string;
  secondaryDescription?: string;
  className?: string;
}

function formatSegment(segment: string) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function PageHeading({
  title,
  description,
  secondaryDescription,
  className,
}: PageHeadingProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => ({
    label: formatSegment(segment),
    href: "/" + segments.slice(0, index + 1).join("/"),
  }));

  return (
    <div className={cn("flex flex-col items-start space-y-4", className)}>
      <Breadcrumb>
        <BreadcrumbList className="text-zinc-900 dark:text-white/80">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <div key={crumb.href} className="flex items-center">
                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-purple-600 dark:text-purple-400">
                      {crumb.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <h2 className="text-4xl font-black tracking-tight text-zinc-900 uppercase md:text-5xl dark:text-white/80">
        {title}
      </h2>

      {description && <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">{description}</p>}

      {secondaryDescription && (
        <p className="max-w-2xl text-xs text-zinc-400 dark:text-zinc-500">{secondaryDescription}</p>
      )}
    </div>
  );
}
