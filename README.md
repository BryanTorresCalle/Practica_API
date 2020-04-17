# PRÁCTICA APIS - HTML

##SCRIPT BASES DE DATOS

-- Table: public.pages

-- DROP TABLE public.pages;

CREATE TABLE public.pages
(
    id bigint NOT NULL DEFAULT nextval('"Name_Id_seq"'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    url text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    CONSTRAINT "Name_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.pages
    OWNER to postgres;
```

```sql
-- Crear una tabla de marcadores
CREATE TABLE public.marcadores
(
    id integer NOT NULL DEFAULT nextval('marcadores_id_seq'::regclass), --Id auto incremento
    url text,
    nombre varchar varying,
    descripcion text
)

