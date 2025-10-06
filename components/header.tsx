"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/auth-context";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  // Enquanto verifica sessão, mostra header básico
  if (loading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-secondary"></div>
            <span className="text-xl font-bold text-primary">Cosmer</span>
          </Link>
          <span className="text-sm text-gray-500">Carregando...</span>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-secondary"></div>
            <span className="text-xl font-bold text-primary">Cosmer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Seu menu dropdown permanece idêntico */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-secondary transition-colors">
                <span>Funcionalidades</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/funcionalidades/forca-vendas">Força de Vendas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/funcionalidades/ecommerce-b2b">E-commerce B2B</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/funcionalidades/pedidos-ia">Pedidos com IA</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/funcionalidades/mercos-pay">Mercos Pay</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/funcionalidades/videochamada">Videochamada</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-secondary transition-colors">
                <span>Segmentos</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/segmentos/industrias">Indústrias</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/segmentos/distribuidoras">Distribuidoras</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/segmentos/representantes">Representantes</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/planos" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Planos e Preços
            </Link>
            <Link href="/integracoes" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Integrações
            </Link>
            <Link href="/contato" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Contato
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                    <User className="h-4 w-4" />
                    <span>{user.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/dashboard" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center space-x-2 text-red-600">
                    <LogOut className="h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button size="sm" className="bg-secondary hover:bg-secondary/90" asChild>
                  <Link href="/register">Teste Grátis</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/funcionalidades" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                Funcionalidades
              </Link>
              <Link href="/segmentos" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                Segmentos
              </Link>
              <Link href="/planos" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                Planos e Preços
              </Link>
              <Link href="/integracoes" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                Integrações
              </Link>
              <Link href="/contato" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                Contato
              </Link>

              <div className="flex flex-col space-y-2 pt-4">
                {user ? (
                  <>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleLogout} className="text-red-600 bg-transparent">
                      Sair
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90" asChild>
                      <Link href="/register">Teste Grátis</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
