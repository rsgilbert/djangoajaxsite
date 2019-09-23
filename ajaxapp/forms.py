from django import forms

class LocationsForm(forms.Form):
    names_choices= zip(['Adam', 'Eve', 'Cain', 'Abel', 'Seth'], ['Adam', 'Eve', 'Cain', 'Abel', 'Seth'])
    names = forms.TypedChoiceField(choices=names_choices)

