export function useFormData() {
  const form = reactive({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    jurisdiction: '',
    revenue: '',
    businessType: '',
    insuranceTypes: [] as string[],
    consent: false,
  })

  const submitted = ref(false)
  const submitting = ref(false)

  const isValid = computed(() => {
    return (
      form.name.trim() !== '' &&
      form.businessName.trim() !== '' &&
      form.email.trim() !== '' &&
      form.phone.trim() !== '' &&
      form.jurisdiction !== '' &&
      form.revenue !== '' &&
      form.businessType.trim() !== '' &&
      form.insuranceTypes.length > 0 &&
      form.consent
    )
  })

  async function submitForm() {
    if (!isValid.value) return
    submitting.value = true
    await new Promise(resolve => setTimeout(resolve, 1500))
    submitting.value = false
    submitted.value = true
  }

  function resetForm() {
    form.name = ''
    form.businessName = ''
    form.email = ''
    form.phone = ''
    form.jurisdiction = ''
    form.revenue = ''
    form.businessType = ''
    form.insuranceTypes = []
    form.consent = false
    submitted.value = false
  }

  return { form, isValid, submitted, submitting, submitForm, resetForm }
}
