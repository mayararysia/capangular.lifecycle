# Desafio - Angular (em Grupo)
# Life Cycle

O time deverá desenvolver cenários (templates e typescript) que realize a impressão no console de uma mensagem genérica quando cada evento do ciclo de vida relacionado abaixo for executado. Por exemplo: construir um formulário que dê a possibilidade de, ao usuário realizar uma mudança no escopo do modelo, o evento ngOnChanges seja chamado e uma frase qualquer na console seja exibida. 

## Ciclos de vida:

- 1. OnChanges
- 2. OnInit
- 3. DoCheck
- 4. AfterContentInit
- 5. AfterContentChecked
	- 1. Componente filho -> OnChanges
- 2. Componente filho -> OnInit
- 3. Componente filho -> DoCheck
- 4. Componente filho -> AfterContentInit
- 5. Componente filho -> AfterContentChecked
- 6. Componente filho -> AfterViewInit
- 7. Componente filho -> AfterViewChecked
- 6. AfterViewInit
- 7. AfterViewChecked
- 8. OnDestroy


Repositório:
[GitHub do líder]/capangular.lifecycle

## RUN

```
npm install && npm start
```

