<script>
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';	
</script>
  
  <Card>
	<form class="flex flex-col space-y-6" action="/">
	  <h3 class="text-xl font-medium text-gray-900 dark:text-white">¡Entra como repartidor o restaurante!</h3>
	  <Label class="space-y-2">
		<span>Correo electronico</span>
		<Input type="email" name="email" placeholder="name@company.com" required />
	  </Label>
	  <Label class="space-y-2">
		<span>Tu contraseña</span>
		<Input type="password" name="password" placeholder="•••••" required />
	  </Label>
	  <div class="flex items-start">
		<Checkbox>Recuerdame</Checkbox>
		<a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> ¿Contraseña olvidada? </a>
	  </div>
	  <Button type="submit" class="w-full">Entra en tu cuenta</Button>
	  <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
		¿No estas registrado? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500"> Crea una cuenta con un codigo de invitación </a>
	  </div>
	</form>
  </Card>